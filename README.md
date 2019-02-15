This project was to demonstrate how to make routing still work when we deploy React app to S3 and use S3 static hosting feature.

## Step01 
git clone this project

## Step02
install Node.js 

## Step03 
go to project and execute the following: 
npm start

## Step04
check if localhost:3000/ show the index.html page

## Step05
npm run-script build

## Step06 
create a S3 bucket and do the followings: 
* enable static hosting
* remove restriction on public permissions on the bucket level
* add the following policy to the redirection rule under teh static hosting tab: 
```
<RoutingRules>
  <RoutingRule>
    <Condition>
      <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
    </Condition>
    <Redirect>   
      <ReplaceKeyPrefixWith>#/</ReplaceKeyPrefixWith>
    </Redirect>
  </RoutingRule>
</RoutingRules>
```

## Step07
* upload all files inside the /build folder after the npm build step to S3 bucket 
* make all those files public available 

## Step08 
check the final result
