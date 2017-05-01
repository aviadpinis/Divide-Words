export function WordDivisionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/wordDivision/wordDivision.html',
    scope: {
        creationDate: '='
    },
    controller: WordDivisionController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class WordDivisionController {
  constructor () {
    'ngInject';

  }

  changeText(){
    var len = this.text.length;
    var spec = this;
    for(var i=0,h=0,w=0;i<len;i++) {
      // d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
      if(spec.text[i]!=" ") {
        var newg = d3.select("#tavs").append("g");
        newg.append("rect").attr("x", 380 - 50 * w - 30).attr("y", 50 * h + 10).attr("width", 50).attr("height", 50).style("fill", "yellow").style("stroke", "black");
        newg.append("text").attr("x", 380 - 50 * w + 5).attr("y", 50 * h + 25).style("fill", "blue").text(spec.text[i]);
      }
      w += 1;
      if(spec.text[i]=='\n' || w % 6 == 0)
      {
        h += 1;
        w = 0
      }
    }
  }

}
