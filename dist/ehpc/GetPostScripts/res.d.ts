export interface GetPostScriptsResponse {
    /**
     * 请求ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    RequestId: string;
    /**
     * 后处理脚本。
     */
    PostInstallScripts: {
        /**
         * 后处理脚本的执行参数。
         * @example `-h`
         */
        Args: string;
        /**
         * 后处理脚本的下载地址。
         * @example `https://bucket.oss-cn-shanghai.aliyuncs.com/postscript_examples.sh`
         */
        Url: string;
    }[];
}
