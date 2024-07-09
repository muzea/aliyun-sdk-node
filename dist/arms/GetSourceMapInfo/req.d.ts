export interface GetSourceMapInfoRequest {
    /**
     * SourceMap的ID标识串。格式为：`pid/sourcemap文件版本/sourcemap文件名`
     * @example `atc889zkcf@d8deedfa9bf****​/0.0.0/test.sourcemap.js`
     */
    "ID": string;
    /**
     * 文件名中的关键字，按照关键字进行过滤查询。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 排序字段：
     * - version：以版本进行排序。
     * - uploadTime：以上传时间排序。
     * @example `version`
     */
    "OrderField"?: string;
    /**
     * 是否正序排序：
     * - true：正序排序。
     * - false：逆序排序。
     * @example `true`
     */
    "AscendingSequence"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * SourceMap的版本。
     * @example `0.0.0`
     */
    "Edition"?: string;
}
