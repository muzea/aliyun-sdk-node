export interface DescribeWebHostingFileResponse {
    /**
     * 唯一请求ID。
     * @example `93FC5921-2A54-408B-B360-2E5C93488CF4`
     */
    RequestId: string;
    /**
     * 返回的文件详情。
     */
    Data: {
        /**
         * 文件路径。
         * @example `/error.png`
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
         * 文件路径是否存在。如果查询一个不存在的文件路径，该字段将返回为false，其他字段为空。
         * @example `true`
         */
        Exists: boolean;
        /**
         * 上一次修改文件时间的时间戳。
         * @example `1590398956000`
         */
        LastModifiedTime: number;
        /**
         * 文件签名URL，有效时间30分钟。
         * @example `http://fbpsbvmo-154159039388****-static.oss-cn-zhangjiakou.aliyuncs.com/0e16bb12-14af-4635-b24c-5ac1a9a*****​/error.png?Expires=1590460358&OSSAccessKeyId=STS.NUcPHyHQr2xQ6zAe5ybi*****&Signature=b2L4kBEFrA2EZvZbm3B%2FyNSxVeA%3D&security-token=CAISgQJ1q6Ft5B2yfSjIr5bWG%2FLNpY5Thbq6NFzwgTUsbuZ4grfe0Tz2IHBEeXRuA%2B0WsvQ%2Bnm9X6vgelqFZYqRoYGHiUZOjKEbIPUXzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMh1ToiuPzkk5bMukuE1gXAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEgaqfoo1vEUpWeW5I7CXwcN%2BWePN%2BvF79tuIEpwae0gEqsBtv%2F4mLhxtunSkZQQTrutnEPAOhqAAU49tl4awl%2F0fID3wRpPDCKqg%2BfXifeRRPI2Tr%2Bm4PmK4qPffsI%2F5JXB4JA71uN5TkvMC6LxxTuQnJaTateDrfEDnzyyIVISjvQ7rzt8sxZCnDDfjzx6Lc5TAELuapDjeXK6w%2BWkbhwBTWcjrGAJvdaOA4IodaPZyDlyhO4jt1nv`
         */
        SignedUrl: string;
    };
}
