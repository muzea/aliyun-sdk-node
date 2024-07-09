export interface UpdateStackTemplateByResourcesResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 修正后的模板的内容。
     * @example `{\"ROSTemplateFormatVersion\": \"2015-09-01\", \"Resources\": {\"Vpc\": {\"Type\": \"ALIYUN::ECS::VPC\", \"Properties\": {\"VpcName\": \"test\", \"CidrBlock\": \"192.168.0.0/16\", \"Description\": \"test2\"}}}, \"Outputs\": {\"VpcId\": {\"Value\": {\"Fn::GetAtt\": [\"Vpc\", \"VpcId\"]}}}}`
     */
    NewTemplateBody: string;
    /**
     * 修正前的模板的内容。
     * @example `{\"ROSTemplateFormatVersion\": \"2015-09-01\", \"Resources\": {\"Vpc\": {\"Type\": \"ALIYUN::ECS::VPC\", \"Properties\": {\"VpcName\": \"test\", \"CidrBlock\": \"192.168.0.0/16\", \"Description\": \"test1\"}}}, \"Outputs\": {\"VpcId\": {\"Value\": {\"Fn::GetAtt\": [\"Vpc\", \"VpcId\"]}}}}`
     */
    OldTemplateBody: string;
}
