export interface CreateDBImportTaskResponse {
    /**
     * 上传文件使用的Host。
     * ><notice>该接口返回的文件上传Host站点配有跨域限制规则，仅允许官方console.aliyun.com网站直传文件。不可用于三方网站文件直传。不影响非网页端文件上传。></notice>
     * @example `https://mps-zjk-share.oss-cn-zhangjiakou.aliyuncs.com`
     */
    Host: string;
    /**
     * 上传文件的过期时间。
     * @example `2020-07-20T05:32:03Z`
     */
    ExpireTime: string;
    /**
     * 上传文件使用的FileKey。
     * @example `mongo/import/0e16bb12-14af-4635-b24c-5ac1a9*****​/20200720130203_973820af-966d-42ec-9fab-17dfe4a******.csv`
     */
    FileKey: string;
    /**
     * 上传文件使用的AccessKeyId。
     * @example `LTAIupaslTlU*****`
     */
    AccessKeyId: string;
    /**
     * 上传文件使用的Signature。
     * @example `*****luWDvbmhqwwy9pm/Mso++pk=`
     */
    Signature: string;
    /**
     * 唯一请求ID。
     * @example `692DCFEF-46DD-4EBB-B1DB-338E687DC260`
     */
    RequestId: string;
    /**
     * 上传文件使用的Policy。
     * @example `eyJleHBpcmF0aW9uIjjoiMjAyMC0wNy0yMFQwNTozMjowMy40NDVaIiwiY29uZGl0aW9ucyI*****Y29udGVudC1sZW5ndoiMjAyMC==`
     */
    Policy: string;
    /**
     * 任务ID。
     * @example `973820af-966d-42ec-9fab-17dfe4a*****`
     */
    TaskId: string;
}
