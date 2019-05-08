import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

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
  }
});
