export interface ListWatermarkRequest {
    /**
     * 应用ID。默认取值：**app-1000000**。
     * 若已开通多应用体系，传入应用ID，可查询指定应用下的图文水印模板；不传，则默认返回所有应用下的图文水印模板。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
