## Synopsis

This project is a reference node.js web API

## Running it

Running the CloudFormation template.  All parameters are optional:
* If you don't specify a ServiceInstanceKeyName, you won't be able to ssh to the backend EC2 instances.
* HostedZoneName/DNSRecord are if you want to create a CNAME DNS record to your ELB
* SSLCertificateARN will install an SSL cert you have uploaded to IAM at your ELB and give you an https endpoint
`aws cloudformation create-stack --stack-name MyStack --template-body file://$PATH_TO_ecs_reference.json --parameters ParameterKey=ServiceInstanceKeyName,ParameterValue=$YOUR_KEY_NAME ParameterKey=AutoScalingStartInstances,ParameterValue=1 ParameterKey=HostedZoneName,ParameterValue=$YOUR_HOSTED_ZONE. ParameterKey=DNSName,ParameterValue=$YOUR_DNS_NAME. ParameterKey=SSLCertificateARN,ParameterValue=$IAM_SERVER_CERT_ARN --capabilities CAPABILITY_IAM`