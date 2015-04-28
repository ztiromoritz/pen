#!/bin/bash
base64 $1 | gsed "s/.\{100\}/&\\\\\n/g"
