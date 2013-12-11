describe("Excercise model", function () {
    var model, collection;

    beforeEach(function () {
        model = new Excercise();
        collection = new ExcerciseCollection();
        model.defaults = {
            isValid: null
        };
    });

    it("should be defined", function () {
        expect(model).toBeDefined();
    });

    it("shouldn't be empty", function () {
        expect(model).not.toBeNaN();
    });

    it("should be an object", function () {
        expect(typeof model).toBe("object");
    });

    it("shouldn't set isValid class", function () {
        expect(model.defaults.isValid).toBe(null);
    });

    describe("Excercise collection", function () {

        it("should have model set", function () {
            expect(collection.model).toBeDefined();
        });

        it("should be init", function () {
            expect(collection.initialize).toBeDefined();
        });
    });
});