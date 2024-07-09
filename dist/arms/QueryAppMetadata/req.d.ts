export interface QueryAppMetadataRequest {
    /**
     * 元数据ID列表，多个ID之间用","分隔
     * @example `4c9dd447,3c76c565`
     */
    "MetaIds": string;
    /**
     * 元数据类型
     * --sql 获取sqlId获取SQL语句
     * --exception 通过exceptionId返回异常堆栈
     * @example `sql`
     */
    "MetaType": string;
    /**
     * 应用的ID标识串。获取方式请参见如何获取应用PID。
     * @example `ggxw4lnjuz@54364d85b97dc56`
     */
    "Pid": string;
    /**
     * 地域ID。默认情况下请填写cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
