interface SearchImagesRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 实例ID。
    * @example `cityvisual-xxxxxx`
    */ "InstanceId": string;
    /**
    * 返回结果在查询结果集中的偏移量，默认为**0**。
    * @example `0`
    */ "From"?: number;
    /**
    * 图像内容，base64 编码，多个用","隔开。
    * > 当**NoFeature**值为**False**时，为必选项。
    * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wB...`
    */ "Contents"?: string;
    /**
    * 查询范围起始时间戳 (毫秒)，
    * 13 位， 如1553734800000。
    * @example `1553734800000`
    */ "StartTime"?: string;
    /**
    * 查询类型。根据算法不同查询不同的类型，天擎算法查询类型示例:
    * - person(行人)
    * - bicycle (非机动⻋)
    * - vehicle(机动⻋)
    * @example `person`
    */ "Type"?: string;
    /**
    * 查询范围结束时间戳 (毫秒)，
    * 13 位， 如1553756400000。
    * @example `1553735800000`
    */ "EndTime"?: string;
    /**
    * 支持使用多个目标id查询，实现渐进性查询。
    * id与id之间用逗号“,”隔开，如:”001,002”,
    * 查询的结果是与001和002两个目标共同相似度最高的图像。
    * @example `001,002`
    */ "ImageIds"?: string;
    /**
    * 摄像头点位id，支持多点位查询。
    * 各个点位之间用逗号"," 隔开，如"0001,0002", 查询摄像头0001和0002下的目标。
    * @example `003_2`
    */ "CameraIds"?: string;
    "Attribute"?: string[];
    /**
    * "True"表示不用特征匹配查询，纯属性或id 查询， "False"表示使用特征查询。
    * @example `True`
    */ "NoFeature"?: string;
    /**
    * 返回结果数量，默认为**10**。
    * @example `100`
    */ "Size": number;
}
export { SearchImagesRequest };