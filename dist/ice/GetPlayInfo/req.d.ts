export interface GetPlayInfoRequest {
    /**
     * 媒资ID。
     * >
     * > MediaId和InputURL字段中至少一个不能为空。
     * @example `86434e152b7d4f20be480574439fe***`
     */
    "MediaId"?: string;
    /**
     * 注册媒资时填写的InputURL，详情见[RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html)。
     * >
     * > MediaId和InputURL字段中至少一个不能为空。
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4  或  vod://****20b48fb04483915d4f2cd8ac****`
     */
    "InputURL"?: string;
}
