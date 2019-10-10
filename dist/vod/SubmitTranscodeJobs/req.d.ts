interface SubmitTranscodeJobsRequest {
    "RegionId"?: string;
    /**
    * 使用指定的模板组进行转码，可在[控制台转码设置](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.18.2f1a2267jCybwh#/vod/settings/transcode/vod)里查看模版组ID。
    * @example `56e680e618708fef7cefbf2cae7cc9yu`
    */ "TemplateGroupId": string;
    /**
    * 视频ID。
    * @example `d3e680e618708fef7cefbf2cae7cc931`
    */ "VideoId": string;
    /**
    * 拥有者ID。
    * @example `1237342`
    */ "OwnerId"?: number;
    /**
    * 管道ID。
    * @example `d3e680e618708fef7cefbf2cae7cc931`
    */ "PipelineId"?: string;
    /**
    * 加密配置，为JSON字符串，只有使用HLS标准加密时才需要此参数。
    * > - **EncryptConfig**结构体中**CipherText**参数必须为通过[GenerateDataKey](https://help.aliyun.com/document_detail/28948.html?spm=a2c4g.11186623.2.21.2f1a2267jCybwh)生成的AES_128密文秘钥，否则标准加密转码失败，标准加密接入流程请参阅[HLS标准加密](https://help.aliyun.com/document_detail/68612.html?spm=a2c4g.11186623.2.22.2f1a2267jCybwh)。
    * - 无论标准加密、私有加密，**TemplateGroupId**对应的模板数据，必须都勾选HLS加密选项，否则不加密。
    * @example `{"CipherText":"ZjJmZGViNzUtZWY1Mi00Y2RlLTk3MTMt", "DecryptKeyUri":"http://decrypt.demo.com?CipherText=ZjJmZGViNzUtZWY1Mi00Y2RlLTk3MTMt"}`
    */ "EncryptConfig"?: string;
    /**
    * 覆盖参数(JSON字符串)，支持对转码模板关联的指定图片水印文件、文字水印内容、字幕文件地址以及字幕文件编码格式的覆盖。
    * @example `{"Watermarks":[{"WatermarkId":"watermark1","FileUrl":"http://test.bucket.aliyuncs.com/image/replace.png"},{"WatermarkId":"watermark2","Content":"水印测试"}]}`
    */ "OverrideParams"?: string;
    /**
    * 当前发起的转码作业在所有排队作业中的优先级。取值范围：`[1-10]`。最高优先级：**10**，默认值：**6**。
    * > Priority参数只影响当前发起的转码作业在所有排队状态作业中的优先级，但不影响已经转码处理中的任务优先级。
    * @example `6`
    */ "Priority"?: string;
    /**
    * 用户自定义数据。
    * @example `{"type":"vod"}`
    */ "UserData"?: string;
}
export { SubmitTranscodeJobsRequest };