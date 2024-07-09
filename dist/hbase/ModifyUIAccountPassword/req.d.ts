export interface ModifyUIAccountPasswordRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 待重置的集群管理系统用户名，如果HBase实例没有新建用户，默认用户名为**root**。
     * @example `test01`
     */
    "AccountName": string;
    /**
     * 集群管理系统目标用户名的新密码。长度为2~30位，需包含大写字母、小写字母、特殊字符和数字中的一种或者多种，允许的特殊字符包括_-。
     * @example `**********`
     */
    "AccountPassword": string;
}
