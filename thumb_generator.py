#!/usr/bin/env python

'''
thumb_generator.py

Copyright 2019 Pandalism
Contact: www.felixdmr.com

This script creates thumbnails for the png and jpg images inside the posts_assets folder.
'''


import os
from PIL import Image
from pathlib import Path


# Parameters
max_width = 1000
max_height = 1000

assetFolder = 'post-assets/'


# run through .png
print ("==================================================")
print ("png")
print ("==================================================")
for imgFile in Path(assetFolder).glob("**/*.png"):
    print ("===")
    file, ext = os.path.splitext(str(imgFile))
    print(imgFile)
    if os.path.exists(file + "_thumb" + ext):
        print("thumbnail already exists")
    elif (file.find('_thumb') != -1):
        print("is thumbnail")
    else:
        print("thumbnail doesn't exist")
        im = Image.open(imgFile)
        im.thumbnail([max_width, max_height])
        im.save(file + "_thumb" + ext)
        print("thumbnail made!")
        print(file + "_thumb" + ext)

print ("==================================================")
print ("jpg")
print ("==================================================")
# run through .jpg
for imgFile in Path(assetFolder).glob("**/*.jpg"):
    print ("===")
    file, ext = os.path.splitext(str(imgFile))
    print(imgFile)
    if os.path.exists(file + "_thumb" + ext):
        print("thumbnail already exists")
    elif (file.find('_thumb') != -1):
        print("is thumbnail")
    else:
        print("thumbnail doesn't exist")
        im = Image.open(imgFile)
        im.thumbnail([max_width, max_height])
        im.save(file + "_thumb" + ext)
        print("thumbnail made!")
        print(file + "_thumb" + ext)

print ("==================================================")
print ("jpeg")
print ("==================================================")
# run through .jepg
for imgFile in Path(assetFolder).glob("**/*.jpeg"):
    print ("===")
    file, ext = os.path.splitext(str(imgFile))
    print(imgFile)
    if os.path.exists(file + "_thumb" + ext):
        print("thumbnail already exists")
    elif (file.find('_thumb') != -1):
        print("is thumbnail")
    else:
        print("thumbnail doesn't exist")
        print("thumbnail doesn't exist")
        im = Image.open(imgFile)
        im.thumbnail([max_width, max_height])
        im.save(file + "_thumb" + ext)
        print("thumbnail made!")
        print(file + "_thumb" + ext)
