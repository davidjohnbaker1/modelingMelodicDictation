#======================================================================================================
# Extracting Features
#--------------------------------------------------
# Point to Features
source("scripts/FANTASTIC/")

setwd("/Users/davidjohnbaker/Desktop/projects/dictation/corpus/xml/midi/csv")
list.files()
berkowitzFeatures <- compute.features(melody.filenames = list.files(pattern=".csv"), 
                                     dir = ".",
                                     use.segmentation = FALSE, 
                                     write.out = TRUE)
library(data.table)
fwrite(berkowitzFeatures,"BerkowitzFeatures.csv")
#======================================================================================================