$.getJSON('disk.json', function(diskSize) {
	var satuan_size="Kb";
	var satuan_used="kb";
	var percentageColor;
	
	var disk_usage_percentage=(diskSize.used)/diskSize.size*100
	if (diskSize.size > 1024){
		diskSize.size=diskSize.size/1024
		satuan_size="Mb";
		
		if (diskSize.size > 1024){
		    diskSize.size=diskSize.size/1024
		    satuan_size="Gb";
		}
	}
	
	if (diskSize.used > 1024){
		diskSize.used=diskSize.used/1024
		satuan_used="Mb";
		
		if (diskSize.used > 1024){
		    diskSize.used=diskSize.used/1024
		    satuan_used="Gb";
		}
	}
	
	if (disk_usage_percentage <= 33){
		percentageColor="#61b832";
	}
	else if (disk_usage_percentage >= 66){
		percentageColor="#de4343";
	}
	else{
		percentageColor="#eaaf51";
	}
	
	var diskFreePercentage = '<div class="p-bar p-bar-stripes">' +
				 '<span style="width: ' + disk_usage_percentage + 
				 '%; background-color: ' + percentageColor + ';"></span>';
	
	var diskStatOutput = "Disk Usage: <strong>" + diskSize.used.toFixed(1) + "</strong>" + satuan_used + " of " + 
			      "<strong>" + diskSize.size.toFixed(1) + "</strong>"  + satuan_size;
			      
	document.getElementById("diskFreePercentage").innerHTML=diskFreePercentage;
	document.getElementById("diskStatOutput").innerHTML=diskStatOutput;
  });
