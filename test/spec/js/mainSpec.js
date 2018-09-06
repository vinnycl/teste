describe("Button Click Event Tests", function() { 
    // create html to test
    let elem = document.createElement('div');
    elem.setAttribute("id", "testes");
    document.body.appendChild(elem);
    document.getElementById('testes').innerHTML = '<div id="teste-click-main"><button id="test-click" class="add-class1 " onclick="toggle();">test</button><div id="next-element" class="add-class2 hidden">other list</div></div>';
    it ("Should expect that element has been created", function() {
        expect(document.getElementById('testes')).not.toBe(null);
    });
    document.getElementById("test-click").click();
    it ("Should add the button class to 'button--benefits-hide'.", function() {
        expect(document.querySelector("#test-click").classList.contains("button--benefits-hide")).toBe(true);
    });
    it ("Should remove the next element class 'hidden'", function() {
        expect(document.querySelector("#next-element").classList.contains("hidden")).toBe(false);
    });
    it ("Should expect that element has been removed", function() {
        document.getElementById('testes').remove();
        expect(document.getElementById('testes')).toBe(null);
    });
});