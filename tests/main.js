import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import { Tasks } from "../imports/api/tasks";

import { assert } from "chai";

describe("meteor-react-private-blog", function() {
  it("package.json has correct name", async function() {
    const { name } = await import("../package.json");
    assert.equal(name, "meteor-react-private-blog");
  });

  if (Meteor.isClient) {
    it("client is not server", function() {
      assert.equal(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function() {
      assert.equal(Meteor.isClient, false);
    });

    /******* DELETE TEST *******/

    describe("Tasks", () => {
      describe("methods", () => {
        const userId = Random.id();
        let taskId;

        beforeEach(() => {
          Tasks.remove({});

          taskId = Tasks.insert({
            text: "test task",
            createdAt: new Date(),
            owner: userId,
            username: "tmeasday"
          });
        });

        it("can delete owned task", () => {
          // Find the internal implementation of the task method so we can
          // test it in isolation
          const deleteTask = Meteor.server.method_handlers["tasks.remove"];

          // Set up a fake method invocation that looks like what the method expects
          const invocation = { userId };

          // Run the method with `this` set to the fake invocation
          deleteTask.apply(invocation, [taskId]);

          // Verify that the method does what we expected
          assert.equal(Tasks.find().count(), 0);
        });
      });
    });
  }
});
