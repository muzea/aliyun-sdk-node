export interface UploadRequest {
    /**
     * SourceMap文件上传到的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用ID。
     * 在**ARMS控制台**的**前端监控** > **前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含前端应用的pid，格式为pid=xxx。由于浏览器进行了编码，应用需要对xxx%40xxx格式的pid稍作修改。例如，如果URL中包含的pid为eb4zdose6v%409781be0f44d****，则需要将%40替换为@，即：eb4zdose6v@9781be0f44d****。
     * @example `b590lhguqs@8cc3f6354******`
     */
    "Pid": string;
    /**
     * SourceMap文件名。
     * @example `test.js.map`
     */
    "FileName": string;
    /**
     * 不推荐使用此参数。
     * @example `null`
     */
    "Version"?: string;
    /**
     * SourceMap文件的String字符串内容。
     * @example `test file content`
     */
    "File": string;
    /**
     * SourceMap文件版本。
     * @example `0.0.0`
     */
    "Edition"?: string;
}
