export interface CreateAxgGroupRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC10000012345****`
     */
    "PoolKey": string;
    /**
     * G号码组名称。如果未指定G号码组名称，将以G号码组的ID作为名称。
     * > 支持中文、英文和特殊字符（例如：!@#$^_"等），长度不超过16个字符。
     * @example `测试分组`
     */
    "Name"?: string;
    /**
     * G号码组的备注信息。
     * > 支持中文、英文和特殊字符（例如：!@#$^_"等），长度不超过50个字符。
     * @example `测试用分组`
     */
    "Remark"?: string;
    /**
     * 向新建的G号码组中添加的电话号码。多个号码之间用英文逗号（,）分隔，创建时最多添加200个号码。
     * @example `1390000****,1380000****	`
     */
    "Numbers"?: string;
}
