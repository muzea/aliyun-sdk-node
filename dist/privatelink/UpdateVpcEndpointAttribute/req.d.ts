export interface UpdateVpcEndpointAttributeRequest {
    /**
     * 要修改的终端节点的地域ID。您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `eu-west-1`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改终端节点属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 要修改的终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
    /**
     * 终端节点的名称。
     * 名称长度在2~128个字符之间，以英文字母或中文开头，可包含数字、短划线（-）和下划线（_）。
     * @example `test`
     */
    "EndpointName"?: string;
    /**
     * 终端节点的描述。
     * 描述长度为2~256个字符，不能以`http://`和`https://`开头。
     * @example `This is my Endpoint.`
     */
    "EndpointDescription"?: string;
    /**
     * RAM权限策略。关于策略定义的更多信息，请参见[权限策略基本元素](~~93738~~)。
     * @example `{
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:List*",
            "oss:PutObject",
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
          ],
          "Principal": {
            "RAM": [
              "acs:ram::14199xxxxxx:*"
            ]
          }
        }
      ]
    }`
     */
    "PolicyDocument"?: string;
}
