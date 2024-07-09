export interface ListWebHostingFilesResponse {
    /**
     * 唯一请求ID。
     * @example `93FC5921-2A54-408B-B360-2E5C93488CF4`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 分页标记，标记当前分页请求到的最后一条数据。
         * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****​/test/error1.png`
         */
        NextMarker: string;
        /**
         * 返回数据总数。
         * @example `50`
         */
        Count: number;
        /**
         * 静态网站文件信息。
         */
        WebHostingFiles: {
            /**
             * 文件路径。
             * @example `error/error.jpg`
             */
            FilePath: string;
            /**
             * 文件类型。
             * @example `image/png`
             */
            ContentType: string;
            /**
             * 标记。
             * @example `test`
             */
            ETag: string;
            /**
             * 文件大小，单位字节。
             * @example `235628`
             */
            Size: number;
            /**
             * 上一次修改文件时间的时间戳。
             * @example `1590398956000`
             */
            LastModifiedTime: number;
            /**
             * 文件下载URL，有效时间30分钟。
             * @example `http://fbpsbvmo-15415903938*****-static.oss-cn-zhangjiakou.aliyuncs.com/0e16bb12-14af-4635-b24c-5ac1a9a*****​/test/error.jpg?Expires=1590462873&OSSAccessKeyId=STS.NT9oaFvbRzj8vSViJL2y*****&Signature=pSMbsZUZGwfZEcvT9R7VZPMp%2BVA%3D&security-token=CAISgQJ1q6Ft5B2yfSjIr5eMJNvym71zzajTdHXnjUoZPvYVjIHgpjz2IHBEeXRuA%2B0WsvQ%2Bnm9X6vgelqFZYqRoYGHiUZOgBG3HPUXzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMh1ToiuPzkk5bMukuE1gXAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEgaqfoo1vEUpWeW5I7CXwcN%2BWePN%2BvF79tuIEpwae0gEqsBtv%2F4mLhxtunSkZQQTrutnEPAOhqAAZ6L6gVhZYEK78ZBsQq1hP9nvtEGENelJYiTPWAHmB1mDutOaEzgSpwVMaP3FWpMTy6KgBKMox1NJLUZJK23NlJIlMIJ8lVyCQOG4Ig7oTXTbFc0PQMShK%2FeQIQ2WvZ2x%2F%2FZdgaZIeQR4WnawsWF%2BYC4ScTig0wYTuaLx7pH2WHJ`
             */
            SignedUrl: string;
        }[];
    };
}
