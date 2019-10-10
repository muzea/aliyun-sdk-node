interface UpdateWatermarkRequest {
    "RegionId"?: string;
    /**
    * 水印显示位置、效果等配置(JSON字符串)。
    * 不同的水印类型对应不同的WatermarkConfig内容。
    * @example `{"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft","Type":"Image"}`
    */ "WatermarkConfig": string;
    /**
    * 水印名称。只支持中英文、数字。长度不超过128个字节。UTF-8编码。
    * @example `test`
    */ "Name"?: string;
    /**
    * 水印ID。
    * @example `aasaassa`
    */ "WatermarkId": string;
    "OwnerId"?: number;
}
export { UpdateWatermarkRequest };