interface SaveSingleTaskForSaveArtExtensionRequest {
    "RegionId"?: string;
    /**
    * 域名
    * @example `test.art`
    */ "DomainName": string;
    /**
    * 艺术品分类
    * @example `object type`
    */ "ObjectType"?: string;
    /**
    * 材质与工艺
    * @example `materials and techniques`
    */ "MaterialsAndTechniques"?: string;
    /**
    * 尺寸
    * @example `dimensions`
    */ "Dimensions"?: string;
    /**
    * 名称
    * @example `title`
    */ "Title"?: string;
    /**
    * 创作时间
    * @example `date or period`
    */ "DateOrPeriod"?: string;
    /**
    * 艺术家／创作者
    * @example `maker`
    */ "Maker"?: string;
    /**
    * 题词和标识
    * @example `inscriptions and markings`
    */ "InscriptionsAndMarkings"?: string;
    /**
    * 艺术主题
    * @example `subject`
    */ "Subject"?: string;
    /**
    * 艺术特征
    * @example `features`
    */ "Features"?: string;
    /**
    * 参考
    * @example `reference`
    */ "Reference"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
}
export { SaveSingleTaskForSaveArtExtensionRequest };