export interface RunCTRegistrationResponse {
    /**
     * 请求ID。
     * @example `EB3ACFE6-EA75-49E1-83C0-953580F74D88`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 配准结果下载地址。
         * >- 数据存储格式为`DICOM`, 后缀为`.tar.gz`。
         * - 有效时间为5分钟， 5分钟后链接失效，需要重新生成。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/chest-ct-registration/ctctreg/2020-09-05_13%3A59%3A59_894c42d0-876a-9198-9fd9-09431fb96fad.tar.gz?Expires=1599287399&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=cWTQtdb7geuEJ46cNO%2BGGimrN****`
         */
        DUrl: string;
        /**
         * 配准结果下载地址。
         * >- 数据存储格式为`NIFTI`, 后缀为`.nii.gz`。
         * - 有效时间为5分钟， 5分钟后链接失效，需要重新生成。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/chest-ct-registration/ctctreg/2020-09-05_13%3A59%3A59_894c42d0-876a-9198-9fd9-09431fb96fad.nii.gz?Expires=1599287399&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=Tgjk1WsZFvvyIUMunxizNtivhY****`
         */
        NUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
