# WK-Heatmap-Reviewdata-Merger
Merges 2 arrays from 2 devices to 1 or just sorts out data. 


1. Find the browser console (F12 → Console)
2. Export review cache to a string by inputting JSON.stringify(await review_cache.get_reviews())
3. Right click and copy the object
4. Paste the string to listA in Heatmap Review Merger\Script\script.js
  - optionally paste a second list to listB if you want to merge 2 lists
  - remember to save
7. Open the Merger.html
8. Click convert
9. Click the copy button
10. At this point you need to delete the old values from the DB under Application(Chrome) / Storage(Firefox) -> IndexedDB -> wkof.file_cache -> files
  a) Right click on the review_cache
  b) Select delete if on Chrome or delete review_cache on Firefox
12. Paste to the console and hit enter


You sohuld now have sorted/merged reviews visible.
