#======================================================================================================
# Extracting Features
#--------------------------------------------------
library(data.table)
library(ggplot2)
library(stringr)
# Point to Features
setwd("data/")
file.edit("Fantastic.R")
# NOW SELECT ALL THEN CLICK RUN

list.files()
berkowitzFeatures <- compute.features(melody.filenames = list.files(pattern=".csv"), 
                                     dir = ".",
                                     use.segmentation = FALSE, 
                                     write.out = TRUE)
fwrite(berkowitzFeatures,"BerkowitzFeatures.csv")
#======================================================================================================
# Explore and Extract 
names(berkowitzFeatures)
berkowitzFeatures <- data.table(berkowitzFeatures)
ggplot(berkowitzFeatures, aes(glob.duration)) + geom_density()
# Set Seconds

timeSubset <- berkowitzFeatures[glob.duration > 9 & glob.duration < 12]
ggplot(timeSubset, aes(glob.duration)) + geom_density()
timeSubset
ggplot(timeSubset, aes(x = scale(note.dens), y = scale(tonalness))) + geom_point() +
    labs(title = "Selection of Experimental Melodies",
         x = "Note Density (z score)",
         y = "Tonalness (z Score)") +
  geom_text(aes(label=str_replace_all(file.id,pattern = "Berkowitz",""), hjust = .5, vjust = -.75))

# 10 - 12
# Melodies to Pick 
# 50, 16, 79, 112

# CREATE NEW PIANO BITS, 5X IS GOOD
# Put in experiment, change language to say not goign to get them all


timeSubset[step.cont.loc.var > 2  ]

