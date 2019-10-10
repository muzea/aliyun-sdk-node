interface AddWatermarkRequest {
    "RegionId"?: string;
    /**
    * 水印名称。只支持中英文、数字。长度不超过128个字节，UTF-8编码。
    * @example `水印`
    */ "Name": string;
    /**
    * 水印显示位置、效果等配置(JSON字符串)。
    * @example `{"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft","Type":"Image"}`
    */ "WatermarkConfig": string;
    /**
    * 水印类型：**Image(图片，默认值)**、**Text(文字**)。
    * 水印类型不同，WatermarkConfig内容不同。
    * @example `Text`
    */ "Type": string;
    "OwnerId"?: number;
    /**
    * 水印文件oss地址。图片水印必传。
    * @example `http://outin-3262681cddeb00163e1403e7.oss-cn-shanghai.aliyuncs.com/image/cover/C9934515B1EF727EBAE7FDEC-6-2.png`
    */ "FileUrl"?: string;
    /**
    * 应用ID。取值如：**app-1000000**。
    * @example `app-xxxx`
    */ "AppId"?: string;
}
export { AddWatermarkRequest };