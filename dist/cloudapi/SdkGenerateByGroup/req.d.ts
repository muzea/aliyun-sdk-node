export interface SdkGenerateByGroupRequest {
    /**
     * api分组id，系统生成，全局唯一
     * @example `1a991a450b9548a1a3df38fd3af117c2`
     */
    "GroupId": string;
    /**
     * 指定返回的语言，取值：-**zh-cn**（默认值）：中文-**en-us**：英文
     * @example `java`
     */
    "Language": string;
}
