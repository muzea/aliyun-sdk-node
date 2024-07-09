export interface RenderDistributionOrderResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     */
    SubMessage: string;
    /**
     * pageSize
     */
    PageSize: number;
    /**
     * 当前页
     */
    PageNumber: number;
    /**
     * 总数量
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     */
    Code: string;
    /**
     * 错误消息
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        RenderOrderInfos: {
            ItemInfos: {
                ItemId: string;
                ItemName: string;
                SkuName: string;
                SkuId: number;
                DistributionMallId: string;
                DistributionSupplierId: string;
                DistributorId: string;
                PromotionFee: number;
                Quantity: number;
                ItemUrl: string;
                ItemPicUrl: string;
                Price: number;
                CanSell: boolean;
                Message: string;
                VirtualItemType: string;
                ItemPromInstVOS: {
                    LmItemId: string;
                    SkuIds: number[];
                    AvailableItems: {
                        ItemId: number;
                        LmItemId: string;
                        SkuId: number;
                        LmShopId: number;
                        TbSellerId: number;
                        Number: number;
                        PriceCent: number;
                        Points: number;
                        PointsAmount: number;
                        UserPayFee: number;
                        Removed: boolean;
                    }[];
                    TbSellerId: number;
                    InstanceId: string;
                    PromotionName: string;
                    PromotionType: string;
                    Level: string;
                    DiscountPrice: number;
                    ThresholdPrice: number;
                    SpecialPrice: number;
                    UseStartTime: number;
                    ExpireTime: number;
                    Selected: boolean;
                    CanUse: boolean;
                    Reason: string;
                    SubBizCode: string;
                }[];
                Features: any;
                ReservePrice: number;
            }[];
            DeliveryInfos: {
                Id: string;
                DisplayName: string;
                PostFee: number;
                ServiceType: number;
            }[];
            InvoiceInfo: {
                Type: string;
                Desc: string;
            };
            ExtInfo: any;
            CanSell: boolean;
            Message: string;
            ShopPromInstVOS: {
                LmItemId: string;
                SkuIds: number[];
                AvailableItems: {
                    ItemId: number;
                    LmItemId: string;
                    SkuId: number;
                    LmShopId: number;
                    TbSellerId: number;
                    Number: number;
                    PriceCent: number;
                    Points: number;
                    PointsAmount: number;
                    UserPayFee: number;
                    Removed: boolean;
                }[];
                TbSellerId: number;
                InstanceId: string;
                PromotionName: string;
                PromotionType: string;
                Level: string;
                DiscountPrice: number;
                ThresholdPrice: number;
                SpecialPrice: number;
                UseStartTime: number;
                ExpireTime: number;
                Selected: boolean;
                CanUse: boolean;
                Reason: string;
                SubBizCode: string;
            }[];
        }[];
        UnsellableRenderOrderInfos: {
            ItemInfos: {
                ItemId: string;
                ItemName: string;
                SkuName: string;
                SkuId: number;
                DistributionMallId: string;
                DistributionSupplierId: string;
                DistributorId: string;
                PromotionFee: number;
                Quantity: number;
                ItemUrl: string;
                ItemPicUrl: string;
                Price: number;
                CanSell: boolean;
                Message: string;
                VirtualItemType: string;
                ItemPromInstVOS: {
                    LmItemId: string;
                    SkuIds: number[];
                    AvailableItems: {
                        ItemId: number;
                        LmItemId: string;
                        SkuId: number;
                        LmShopId: number;
                        TbSellerId: number;
                        Number: number;
                        PriceCent: number;
                        Points: number;
                        PointsAmount: number;
                        UserPayFee: number;
                        Removed: boolean;
                    }[];
                    TbSellerId: number;
                    InstanceId: string;
                    PromotionName: string;
                    PromotionType: string;
                    Level: string;
                    DiscountPrice: number;
                    ThresholdPrice: number;
                    SpecialPrice: number;
                    UseStartTime: number;
                    ExpireTime: number;
                    Selected: boolean;
                    CanUse: boolean;
                    Reason: string;
                    SubBizCode: string;
                }[];
                Features: any;
                ReservePrice: number;
            }[];
            DeliveryInfos: {
                Id: string;
                DisplayName: string;
                PostFee: number;
                ServiceType: number;
            }[];
            InvoiceInfo: {
                Type: string;
                Desc: string;
            };
            ExtInfo: any;
            CanSell: boolean;
            Message: string;
            ShopPromInstVOS: {
                LmItemId: string;
                SkuIds: number[];
                AvailableItems: {
                    ItemId: number;
                    LmItemId: string;
                    SkuId: number;
                    LmShopId: number;
                    TbSellerId: number;
                    Number: number;
                    PriceCent: number;
                    Points: number;
                    PointsAmount: number;
                    UserPayFee: number;
                    Removed: boolean;
                }[];
                TbSellerId: number;
                InstanceId: string;
                PromotionName: string;
                PromotionType: string;
                Level: string;
                DiscountPrice: number;
                ThresholdPrice: number;
                SpecialPrice: number;
                UseStartTime: number;
                ExpireTime: number;
                Selected: boolean;
                CanUse: boolean;
                Reason: string;
                SubBizCode: string;
            }[];
        }[];
        AddressInfos: {
            AddressId: number;
            Receiver: string;
            ReceiverPhone: string;
            AddressDetail: string;
            DivisionCode: string;
            TownDivisionCode: string;
            IsDefault: boolean;
        }[];
        ExtInfo: any;
        CanSell: boolean;
        Message: string;
    };
}
