## Synopsis

This project is a reference node.js web API

## Running it

Running the CloudFormation template
`aws cloudformation create-stack --stack-name MyStack --template-body file://$PATH_TO_ecs_reference.json --parameters ParameterKey=ServiceInstanceKeyName,ParameterValue=$YOUR_KEY_NAME ParameterKey=AutoScalingStartInstances,ParameterValue=1 ParameterKey=HostedZoneName,ParameterValue=$YOUR_HOSTED_ZONE. ParameterKey=DNSName,ParameterValue=$YOUR_DNS_NAME. ParameterKey=SSLCertificateARN,ParameterValue=$IAM_SERVER_CERT_ARN --capabilities CAPABILITY_IAM`