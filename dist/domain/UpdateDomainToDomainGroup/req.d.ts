interface UpdateDomainToDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 分组编号
    * @example `1234`
    */ "DomainGroupId": number;
    /**
    * 是否替换当前分组中域名。false即为向分组中新增域名，true为替换分组中原有域名
    * @example `false`
    */ "Replace": boolean;
    /**
    * 域名数据来源，枚举值范围：1 自定义输入域名 2 文件上传
    * @example `1`
    */ "DataSource": number;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * base64编码的xls、xlsx文件，域名来源为文件时该字段为必须。文件中每行一个域名，单次上传最大支持文件大小为2M
    * @example `dGVzdA==`
    */ "FileToUpload"?: string;
    "DomainName"?: string[];
}
export { UpdateDomainToDomainGroupRequest };