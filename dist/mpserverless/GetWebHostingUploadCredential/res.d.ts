export interface GetWebHostingUploadCredentialResponse {
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
         * 文件路径。
         * @example `/`
         */
        FilePath: string;
        /**
         * 文件上传临时凭证的签名信息，用于上传时验证合法性。
         * @example `w7ke9GsiFjb2bR7bQNOOTk4nlbA`
         */
        Signature: string;
        /**
         * 请求表单域的合法性校验策略。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMC0wNS0yNlQwNjozMjoxOC43NTZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLHsia2V5IjoiMGUxNmJiMTItMTRhZi00NjM1LWIyNGMtNWFjMWE5YTdiYjlmL2Zvcm1hdC5qc29uIn1dfQ==`
         */
        Policy: string;
        /**
         * 文件上传临时凭证的安全令牌。
         * @example `CAISgQJ1q6Ft5B2yfSjIr5bWG%2FLNpY5Thbq6NFzwgTUsbuZ4grfe0Tz2IHBEeXRuA%2B0WsvQ%2Bnm9X6vgelqFZYqRoYGHiUZOjKEbIPUXzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMh1ToiuPzkk5bMukuE1gXAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEgaqfoo1vEUpWeW5I7CXwcN%2BWePN%2BvF79tuIEpwae0gEqsBtv%2F4mLhxtunSkZQQTrutnEPAOhqAAU49tl4awl%2F0fID3wRpPDCKqg%2BfXifeRRPI2Tr%2Bm4PmK4qPffsI%2F5JXB4JA71uN5TkvMC6LxxTuQnJaTateDrfEDnzyyIVISjvQ7rzt8sxZCnDDfjzx6Lc5TAELuapDjeXK6w%2BWkbhwBTWcjrGAJvdaOA4IodaPZyDlyhO4jt1nv`
         */
        SecurityToken: string;
        /**
         * 过期时间的时间戳。
         * @example `1590460358`
         */
        ExpiredTime: number;
        /**
         * 上传文件的目标地址。
         * @example `fbpsbvmo-154159039388***-static.oss-cn-zhangjiakou.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 文件上传临时凭证的AccessKeyId。
         * @example `STS.NUcPHyHQr2xQ6zAe5ybi*****`
         */
        AccessKeyId: string;
    };
}
