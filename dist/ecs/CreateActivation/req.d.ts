export interface CreateActivationRequest {
    /**
     * 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。
     * 您可以调用[DescribeRegions](~~25609~~)查看地域对应的ID等信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 默认的实例名称前缀。支持2~50个字符，且必须以字母开头，不能以特殊字符及数字开头，只可包含特殊字符中的半角句号（.）、下划线（_）、短划线（-）和半角冒号（:），不可以使用`http://`或`https://`开头。
     * 使用该接口创建的激活码注册的实例，将使用该名称作为前缀，生成有序的实例名。您也可以在注册托管实例时，指定新的实例名称以覆盖此默认值。
     * 注册托管实例时，如果指定了InstanceName的值，则会生成名称`<InstanceName>-001`，其中编号`001`数字的位数取决于`InstanceCount`数值的位数。如果未指定InstanceName的值，则会使用主机的主机名（Hostname）作为实例的名称。
     * @example `test-InstanceName`
     */
    "InstanceName"?: string;
    /**
     * 激活码对应的描述。支持1~100个字符。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 激活码用于注册托管实例的使用次数上限。取值范围为1~1000。
     * 默认值为10。
     * @example `10`
     */
    "InstanceCount"?: number;
    /**
     * 激活码的有效使用时间，过期后将不能用于注册新的实例。单位：小时。取值范围为1~876576，即1小时~100年。
     * 默认值为4小时。
     * @example `4`
     */
    "TimeToLiveInHours"?: number;
    /**
     * 允许使用该激活码的主机IP。取值为对应的IPv4地址、IPv6地址或CIDR地址段。
     * @example `0.0.0.0/0`
     */
    "IpAddressRange"?: string;
    /**
     * 激活码所属的资源组ID。
     * @example `rg-123******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 托管实例激活码的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 托管实例激活码的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
