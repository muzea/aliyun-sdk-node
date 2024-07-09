export interface EnableDataReflowRequest {
    /**
     * 服务ID。
     * @example `456`
     */
    "ServiceId": number;
    /**
     * 数据回流率。取值范围为\[1,100]。
     * - 当前服务第一次开启数据回流时，且DataReflowRate为空，会提示报错。
     * - 当前服务不是第一次开启数据回流时，且DataReflowRate为空，当前服务的回流率为上一次设置的回流率。
     * @example `100`
     */
    "DataReflowRate"?: number;
    /**
     * 回流路径。回流数据存放路径：**回流路径/${调用主账号id}/${调用子账号id}/${随机文件名}**
     * @example `oss://regen-test-bucket/jhdtest/检测/回流目录/`
     */
    "DataReflowOssPath"?: string;
}
