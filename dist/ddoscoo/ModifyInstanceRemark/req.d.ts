export interface ModifyInstanceRemarkRequest {
    /**
     * 要操作的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 为DDoS高防实例设置备注。
     * 支持使用中文字符、英文大小写字符、数字及部分特殊字符，例如：`,.+-*​/_`。最长不允许超过500个字符。
     * @example `new-remark`
     */
    "Remark": string;
}
