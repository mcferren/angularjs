#!/bin/bash
# Package Orion 2.0 for release as a tarball

set -e
cd target
VERSION=`ls orion*jar | sed -e 's/orion-//' -e 's/.jar//'`
mkdir orion-$VERSION
cp -r ../app orion-$VERSION
cp orion-$VERSION.jar orion-$VERSION/orion.jar
cp -r ../install/* orion-$VERSION
chmod 755 orion-$VERSION/*.sh
echo "Orion $VERSION -- Copyright `date '+%Y'`, Infobelt LLC" >orion-$VERSION/orion.copyright
tar cfz orion-$VERSION.tar.gz orion-$VERSION/