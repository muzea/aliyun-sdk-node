export interface UpdateCustomerRequest {
    /**
     * 产品线ID
     * @example `10552599`
     */
    "ProdLineId"?: number;
    /**
     * BizType
     * @example `xp_commerce_aliyun`
     */
    "BizType"?: string;
    /**
     * 名称
     * @example `张三`
     */
    "Name"?: string;
    /**
     * 客户类型
     * @example `1`
     */
    "TypeCode"?: string;
    /**
     * 电话号码
     * @example `1560000xxxx`
     */
    "Phone"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId"?: string;
    /**
     * 管理人姓名
     * @example `管理人`
     */
    "ManagerName"?: string;
    /**
     * 创建人
     * @example `123`
     */
    "Contacter"?: string;
    /**
     * 行业
     * @example `服饰`
     */
    "Industry"?: string;
    /**
     * 职位
     * @example `主管`
     */
    "Position"?: string;
    /**
     * 邮箱
     * @example `123@123.com`
     */
    "Email"?: string;
    /**
     * 钉钉账号
     * @example `123yiyo`
     */
    "Dingding"?: string;
    /**
     * 外部id
     * @example `10000011`
     */
    "OuterId"?: string;
    /**
     * 外部类型
     * @example `1`
     */
    "OuterIdType"?: number;
    /**
     * 用户id
     * @example `24027`
     */
    "CustomerId": number;
}
