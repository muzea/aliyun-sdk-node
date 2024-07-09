export interface GenerateFunctionFileUploadMetaResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 上传文件的元信息
     */
    UploadMeta: {
        /**
         * 上传文件的入参信息，想要了解更多，请参考OSS的[PostObject](https://help.aliyun.com/document_detail/31988.html)描述。
         */
        PostObjectPolicy: {
            /**
             * 签名信息，详见[Post Signature](https://help.aliyun.com/document_detail/31988.html?spm=a2c4g.11186623.4.5.3d774382LHt5Uz#h2-url-3)
             * @example `XuG0kIHhWPbztVfDGA1HhzdKPJI=`
             */
            Signature: string;
            /**
             * 上传文件的目标地址
             * @example `https://iovcc-yunfunction-qa.oss-cn-shanghai.aliyuncs.com`
             */
            Host: string;
            /**
             * Base64编码过的[PostPolicy](https://help.aliyun.com/document_detail/31988.html?spm=a2c4g.11186623.4.5.3d774382LHt5Uz#h2-url-2)信息
             * @example `eyJleHBpcmF0aW9uIjoiMjAxOC0wOS0xOFQwMjoxMToyNy4wODZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImZ1bmN0aW9uL2ZpbGUvMTI4ODEyNzI0MDkzMDcxMS9QRTlGUUM0OCJdXX0=`
             */
            Policy: string;
            /**
             * PostPolicy的过期时长（毫秒）
             * @example `1537236687`
             */
            Expire: string;
            /**
             * 临时的访问ID
             * @example `STS.NHm36Gt3rEesnNGi7spRPCMeD`
             */
            AccessId: string;
        };
        /**
         * RAM角色扮演的STS Token，详情参见[STS临时授权](https://help.aliyun.com/document_detail/32016.html)。
         * @example `CAIStQN1q6Ft5B2yfSjIr4vYeIzzmexT8qeYbGj2jTcmfN18rIjOpjz2IHFIeHRoBeocs/42n25S6/gSlokqEMRvGxCVNeJctboL2CqPSdWYl5Llx+Qp2MyLMDO/JUYlCllp1aGrIunGc9KBNnpA/00amMl0HFfPdlihNoLzxvwDR98LXw6+QCNbDdNNXGVLo9MbMn2jUpTINQXx0FLNEG1iuAd3lRmkgMbZ+MCH7QfEh1DX0/Ico5+LQqKpdM5xJpxyISncvsx/fbGT1zVLuVoYtvV3i7JP8nLWo9eTHl9a/xSBNa/N+5phMQlyeqk9HelKrfzx0qQi6ryKzdutl04cZrkKCn2YfK3x7vLvRLPLFN8ybuT8IG+fkILNZJjyrQgvJGMGMg1XfdE9K3h2TAUlDT/HLKS7+VfMJQmiT6XCiftmgcMvkA+0pYvRfwfWGvKh/Hc2A7RgPwRqFWZPhDG4K/VbKVwVIwM5XOrMd+gpMkAC85GPlBbJSyhtwktQu/DDfP7MssgdE96uAs4bidZHPskc6jB0FQmpG6jVi0AKf2d+Xa1fy7LwPJKg8r6ZzfV+qBVC8Ubq0BqAAWxX+0Nwa5DhRemsT1hWIFHzz7zvt8mvHXE42bOQsmHAlThYrG27r1IJ4PeiL17aiTPK0nW5aXpvjaskg+b42mR/YsI0T7v7xMuMj6btceXEBBMl3a82lDryxBtj6+N49U5Wn+bKXXAtz5/ti7LWHALboNLIOyJLWZeWOOMzyA63`
         */
        SecurityToken: string;
        /**
         * 上传文件的标识
         * @example `function/file/1288127240930711/PE9FQC48/B1226EA3-2518-4164-8D2D-82B91A077020/hello.zip`
         */
        ObjectKey: string;
    };
}
