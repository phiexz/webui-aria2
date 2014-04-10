function diskStatus(){
    $.getJSON('status.json', function(serverStats) {
	
	/* Statusbar Color */
	if (serverStats.disk_p <= 33){
		percentageColor="#61b832";
	}
	else if (serverStats.disk_p >= 66){
		percentageColor="#de4343";
	}
	else{
		percentageColor="#eaaf51";
	}
	
	var diskFreePercentage = '<div class="p-bar p-bar-stripes">' +
				 '<span style="width: ' + serverStats.disk_p + 
				 '%; background-color: ' + percentageColor + ';"></span>';
	
	var diskStatOutput = "Disk Usage: <strong>" + serverStats.disk_u + "</strong> GB of " + 
			      "<strong>" + serverStats.disk_t + "</strong> GB";
			      
	document.getElementById("diskFreePercentage").innerHTML=diskFreePercentage;
	document.getElementById("diskStatOutput").innerHTML=diskStatOutput;
    });
}

$(document).ready(function(){
  diskStatus();
  var int=self.setInterval(function(){diskStatus()},60000);
}); 
