export interface CreateVpcEndpointRequest {
    /**
     * 终端节点所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建终端节点。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 终端节点名称。
     * 长度为2~128个字符，以英文字母或中文开头，可包含数字、短划线（-）和下划线（_）。
     * @example `test`
     */
    "EndpointName"?: string;
    /**
     * 终端节点类型。
     * 仅取值： **Interface**，表示接口终端节点，您可以添加应用型负载均衡ALB（Application Load Balancer）、传统型负载均衡CLB（Classic Load Balancer）和网络型负载均衡NLB（Network Load Balancer ）的服务资源类型。
     * @example `Interface`
     */
    "EndpointType"?: string;
    /**
     * 每个可用区ENI的私网IP的数量。仅取值：**1**。
     * @example `1`
     */
    "ZonePrivateIpAddressCount"?: number;
    /**
     * 终端节点描述。
     * 描述长度为2~256个字符，开头不能为`http://`和`https://`。
     * @example `This is my Endpoint.`
     */
    "EndpointDescription"?: string;
    /**
     * 终端节点所属的专有网络。
     * @example `vpc-hp356stwkxg3fn2xe****`
     */
    "VpcId": string;
    /**
     * 终端节点关联的终端节点服务。
     * @example `epsrv-hp3xdsq46ael67lo****`
     */
    "ServiceId"?: string;
    /**
     * 终端节点关联的终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceName"?: string;
    /**
     * 终端节点可用区列表。
     */
    "Zone"?: {
        /**
         * 在可用区内要创建终端节点网卡的交换机。
         * 您最多可以设置10个交换机。
         * @example `vsw-hp3uf6045ljdhd5zr****`
         */
        VSwitchId: string;
        /**
         * 终端节点服务对应的可用区。
         * 您最多可以设置10个可用区。
         * @example `cn-huhehaote-b`
         */
        ZoneId: string;
        /**
         * 指定终端节点可用区的IP。
         * 您最多可以指定10个IP。
         * @example `192.168.XX.XX`
         */
        ip: string;
    }[];
    /**
     * 终端节点网卡关联的安全组列表。
     * @example `sg-hp33bw6ynvm2yb0e****`
     */
    "SecurityGroupId"?: string[];
    /**
     * 是否开启托管保护，STS调用方式下生效。取值：
     *
     * - **true**：开启。开启托管保护后，只有和创建时相同的用户才能通过STS方式对该终端节点进行修改或者删除等操作。
     * - **false**（默认值）：不开启。
     * @example `false`
     */
    "ProtectedEnabled"?: boolean;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prod`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
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
