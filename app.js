$(document).ready(function() {
  
  let finalPositionOne = '';
  let finalPositionTwo = '';
  let finalPositionThree = '';

  function reInitializeState() {
    finalPositionOne = '';
    finalPositionTwo = '';
    finalPositionThree = '';
    $('.no-caffeine').addClass('hidden');
    $('.caffeine').addClass('hidden');
    $('#slot-one').removeClass('slot-one-stopping-1 slot-one-stopping-2 slot-one-stopping-3');
    $('#slot-two').removeClass('slot-two-stopping-1 slot-two-stopping-2 slot-two-stopping-3');
    $('#slot-three').removeClass('slot-three-stopping-1 slot-three-stopping-2 slot-three-stopping-3');
  }

  function findFinalPosition(slotNumber) {
    let finalSlotPosition = Math.ceil(Math.random()*3);
    $('#' + slotNumber).removeClass(slotNumber + '-running').addClass(slotNumber + '-stopping-' + finalSlotPosition);
    return finalSlotPosition;
  }

  function verifyWin(positionOne, positionTwo, positionThree) {
    if (positionOne === positionTwo && positionOne === positionThree) {
      setTimeout(function() {
        $('.caffeine').removeClass('hidden');
      }, 1000)
    } else {
      setTimeout(function() {
        $('.no-caffeine').removeClass('hidden');
      }, 1000)
    }
  }

  $('#get-caffeine').on('click', function() {
    if (!$('#slot-one').hasClass('slot-one-running')) {
      reInitializeState();
      $('#slot-one').addClass('slot-one-running');
      $('#slot-two').addClass('slot-two-running');
      $('#slot-three').addClass('slot-three-running');
      $('#get-caffeine').html('Stop spinning');
    } else {
      finalPositionOne = findFinalPosition('slot-one');
      finalPositionTwo = findFinalPosition('slot-two');
      finalPositionThree = findFinalPosition('slot-three');
      verifyWin(finalPositionOne, finalPositionTwo, finalPositionThree);
      $('#get-caffeine').html('Get Caffeine');
    }
  });

});