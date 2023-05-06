# WK-Heatmap-Reviewdata-Merger
Merges 2 arrays from 2 devices to 1 or just sorts out data. 




1. Find the browser console (F12 → Console)
2. Export review cache to a string by inputting JSON.stringify(await review_cache.get_reviews())
3. Right click and copy the object
4. Paste the string to listA in Heatmap Review Merger\Script\script.js
  - optionally paste a second list to listB if you want to merge 2 lists
  - remember to save
5. Open the Merger.html
6. Click convert
7. Copy the new string and add it with review_cache.insert(JSON.parse(""))
