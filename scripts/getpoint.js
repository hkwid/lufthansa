$(document).ready(function() {

  var my = {},
      coin = '5',
      time = new Date(),
      cliend_id = "dkrp375htpkpaeqc2nkrtskr",
      client_secret = "HAqTfFkfXw",
      access_token = '',
      rank = '',
      timelimit = '',
      flight_info = {},
      device = {},
      isRouletteTime = false;

  var setting = {};
  setting.flight_number = '';
  setting.user_name = '';


  var dummy = {};

  dummy.seat = {"SeatAvailabilityResource":{"Flights":{"Flight":{"Departure":{"AirportCode":"TXL","ScheduledTimeLocal":{"DateTime":"2015-09-02T12:45"}},"Arrival":{"AirportCode":"MUC"},"MarketingCarrier":{"AirlineID":"LH","FlightNumber":2037},"Equipment":{"AircraftCode":321}}},"CabinLayout":{"WingPosition":{"Rows":{"First":14,"Last":24}},"ExitRowPosition":[{"Rows":{"First":10,"Last":11}},{"Rows":{"First":26,"Last":26}}]},"SeatDisplay":{"Columns":[{"@Position":"A"},{"@Position":"B"},{"@Position":"C"},{"@Position":"D"},{"@Position":"E"},{"@Position":"F"}],"Rows":{"First":7,"Last":38},"Component":[{"Locations":{"Location":[{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"L"}},"Type":{"Code":"LA"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"R"}},"Type":{"Code":"LA"}}]}},{"Locations":{"Location":[{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"L"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"L"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"LC"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"C"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"RC"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"R"}},"Type":{"Code":"G"}},{"Row":{"Position":38,"Orientation":{"Code":"R"}},"Column":{"Position":{"Code":"R"}},"Type":{"Code":"G"}}]}}],"CabinType":{"Code":"M"}},"SeatDetails":[{"Location":{"Column":"A","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":7,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"B","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":8,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":9,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":8}]}}}},{"Location":{"Column":"A","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":8}]}}}},{"Location":{"Column":"B","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":8}]}}}},{"Location":{"Column":"C","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":8}]}}}},{"Location":{"Column":"D","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":8}]}}}},{"Location":{"Column":"E","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":10,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":"1A"},{"Code":"E"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":11,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":"1A"},{"Code":"E"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":12,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"RS"}]}}}},{"Location":{"Row":{"Number":13,"Type":{"Code":"Z"}}}},{"Location":{"Column":"A","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":14,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"C","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":15,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":16,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Row":{"Number":17,"Type":{"Code":"Z"}}}},{"Location":{"Column":"A","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"C","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"D","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":18,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":19,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"E","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":20,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":21,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"C","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":22,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"1A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"E","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":23,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"B","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"LS"},{"Code":"OW"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"LS"},{"Code":"OW"}]}}}},{"Location":{"Column":"D","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"A"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":9},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":24,"Characteristics":{"Characteristic":[{"Code":"K"},{"Code":"W"},{"Code":"OW"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":8}]}}}},{"Location":{"Column":"B","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"1D"},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"1D"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"1D"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"1D"},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":25,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":8}]}}}},{"Location":{"Column":"A","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"A"},{"Code":8}]}}}},{"Location":{"Column":"E","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":9},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":26,"Characteristics":{"Characteristic":[{"Code":"E"},{"Code":"W"},{"Code":"1A"},{"Code":"E"},{"Code":"L"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":27,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"H"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":28,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"H"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":29,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":30,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"D","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":31,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"D","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":32,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":33,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"}]}}}},{"Location":{"Column":"F","Row":{"Number":34,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":35,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":36,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"LS"}]}}}},{"Location":{"Column":"C","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":37,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}},{"Location":{"Column":"A","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"B","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"1A"},{"Code":"LS"},{"Code":1}]}}}},{"Location":{"Column":"C","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"1A"},{"Code":"LS"}]}}}},{"Location":{"Column":"D","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":"A"},{"Code":"RS"}]}}}},{"Location":{"Column":"E","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":9},{"Code":"RS"},{"Code":1}]}}}},{"Location":{"Column":"F","Row":{"Number":38,"Characteristics":{"Characteristic":[{"Code":"W"},{"Code":"RS"}]}}}}],"Meta":{"@Version":"1.0.0","Link":[{"@Href":"https:\/\/api.lufthansa.com\/v1\/offers\/seatmaps\/LH2037\/TXL\/MUC\/2015-09-02\/M","@Rel":"self"},{"@Href":"https:\/\/api.lufthansa.com\/v1\/references\/airports\/{airportCode}","@Rel":"related"}]}}};
  dummy.device1 = {"major":"0","name":"iBeacon0:3","proximity":"2","minor":"3","rssi":-75,"proximityString":"Far","deviceId":"IB946c5e3cb294007a27cec8b0d0a2606fda95d83a","lastSeen":0};
  dummy.device2 = {"major":"1","name":"iBeacon1:3","proximity":"2","minor":"3","rssi":-56,"proximityString":"Near","deviceId":"IBa5924cdf46a065482177e47a3d016cb125d05e80","lastSeen":0};

  /*--------------------------------------------------------------------
    with beacon
  --------------------------------------------------------------------*/
  my.getDeviceInfo = function() {
    var out = dummy.device1;
    return out;
  };
  //device = my.getDeviceInfo();
  //console.dir(device);

  /*--------------------------------------------------------------------
    with lufthansa api
  --------------------------------------------------------------------*/

  // description: get access token from lufthansa api
  //
  // POST https://api.lufthansa.com/v1/oauth/token
  // Content-Type: application/x-www-form-urlencoded
  // POST Parameter
  // client_id: Your client application key
  // client_secret: Your client secret
  // grant_type: "client_credentials"
  //
  //TODO: ajax modify, promise, deffer
  my.getAccessToken = function(cliend_id, client_secret) {
    var out = 'd494kh9pjqrvmsaxdnbcwv2w';
    return out;
  }
  access_token = my.getAccessToken(cliend_id, client_secret);
  console.log(access_token);

  // description: get flight time info by fliterling flight_info
  // promise: after getflightinfo
  //
  //TODO: ajax modify, promise, deffer, params
  my.getFlightInfo = function() {
    var out = dummy.seat;
    return out;
  };
  flight_info = my.getFlightInfo();
  console.dir(flight_info);

  // description: get flight time info by fliterling flight_info
  // promise: after getflightinfo
  //
  //TODO: filter part
  my.getFlightTime = function(flight_info) {
    var out = "2015-09-04-10-00";
    return out;
  };
  flight_time = my.getFlightTime(flight_info);
  console.log(flight_time);

  /*--------------------------------------------------------------------
    with server
  --------------------------------------------------------------------*/

  // description: send user setting and data to server
  //
  //TODO: modify ajax
  my.getCoin = function(){
    $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: "q="+myform.serialize(),
      success: function(data){
        // on success use return data
        console.log("success!");
      },
      error: function(xhr, type, exception) {
        // if ajax fails display error alert
        alert("ajax error response type "+type);
      }
    });
  };

  // description: send the result of games. get ranking(int) from server
  //
  //TODO: modify ajax
  my.getResult = function() {
    var out = 1;
    return out;
  }
  rank = my.getResult();
  console.log(rank);

  /*--------------------------------------------------------------------
    game program
  --------------------------------------------------------------------*/
  my.setTimeLimit = function() {
    var out = "2015-09-04-12-00";
    return out;
  };
  timelimit = my.setTimeLimit();

  my.checkRouletteTime = function() {
    var current_time = new Date();
    if( current_time > timelimit ) {
      return true;
    } else {
      return false;
    }
  };
  isRouletteTime = my.checkRouletteTime();
  console.log("isRouletteTime");

  /*--------------------------------------------------------------------
    with DOM
  --------------------------------------------------------------------*/
  // description: show images follow the number of coins
  //
  // TODO: animation
  my.showCoins = function(coin) {
    $("#inrangeDevices").append('<img src="images/you_get_coins.png"/>');
  };

  my.showResult = function(_result) {
    $(".result-ranking").append('<p>' + _result + '</p>');
  };

  /*--------------------------------------------------------------------
    events
  --------------------------------------------------------------------*/
  $("#result").change(function(event) {
    device = my.getDeviceInfo();
    //alert(device);
  });

});
