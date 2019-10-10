interface CreateUploadVideoRequest {
    "RegionId"?: string;
    /**
    * 视频标题。
    * 长度不超过128个字符或汉字，UTF8编码。
    * @example `76f98aba-ab84-4f48-833a-07fe9bc2e316`
    */ "Title": string;
    /**
    * 视频源文件名。
    * 必须带扩展名，且扩展名不区分大小写。支持的扩展名参见<a href="~~55396~~">上传概述</a>的限制部分。
    * @example `f26e9ddb-31f5-47cf-8c4f-f5a92b097334`
    */ "FileName": string;
    "OwnerId"?: number;
    /**
    * 自定义视频封面URL地址。
    * @example `f5c75b76-82a5-4562-aa42-339e0daf833b`
    */ "CoverURL"?: string;
    /**
    * 视频描述。
    * 长度不超过1024个字符或汉字，UTF8编码。
    * @example `d192107b-4e80-46ae-a6e9-8995c2de7223`
    */ "Description"?: string;
    /**
    * 视频文件大小。单位：字节。
    * @example `123`
    */ "FileSize"?: number;
    /**
    * 参数暂不可用。
    * @example `127.0.0.1`
    */ "IP"?: string;
    /**
    * 视频分类ID。
    * 请在**点播控制台**>**全局设置**>**分类管理**中编辑或查看分类的ID。
    * @example `67788823`
    */ "CateId"?: number;
    /**
    * 视频标签。
    * 单个标签不超过32个字符或汉字，最多不超过16个标签。多个用逗号分隔，UTF8编码。
    * @example `tag1,tag2`
    */ "Tags"?: string;
    /**
    * 参数暂不可用。
    * @example `NoTranscode`
    */ "TranscodeMode"?: string;
    /**
    * 自定义设置，为JSON字符串，支持消息回调等设置。
    * @example `{"MessageCallback":"{"CallbackURL":"http://test.test.com"}", "Extend":"{"localId":"xxx", "test":"www"}"}`
    */ "UserData"?: string;
    /**
    * 模板组ID。
    * 当不为空时，视频转码使用当前指定的模板组进行转码。可在控制台转码设置里查看模版组ID。
    * @example `405477f9e21e498eaa5cd19ea2c7c854`
    */ "TemplateGroupId"?: string;
    /**
    * 工作流ID。
    * 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明参考文档[工作流](https://help.aliyun.com/document_detail/115347.html?spm=a2c4g.11186623.2.23.23c4257eJ1Qsl1)。
    * @example `405477f9e21e498eaa5c-d19ea2c7c854`
    */ "WorkflowId"?: string;
    /**
    * 存储地址。
    * 当不为空时，会使用该指定的存储地址上传视频文件。可在**点播控制台** > **存储管理**里查看存储地址。
    * @example `out-xxxx.oss-cn-shanghai.aliyuncs.com`
    */ "StorageLocation"?: string;
    /**
    * 参数暂不可用。
    * @example `{"aa":123}`
    */ "CustomMediaInfo"?: string;
    /**
    * 应用ID。取值如：**app-1000000**。使用说明参考文档[多应用](https://help.aliyun.com/document_detail/113600.html?spm=a2c4g.11186623.2.22.23c4257eovDfWP)。
    * @example `app-xxxxxx`
    */ "AppId"?: string;
}
export { CreateUploadVideoRequest };