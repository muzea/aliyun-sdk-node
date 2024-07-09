export interface DescribeConfigurationPriceResponse {
    RequestId: string;
    Message: string;
    TraceId: string;
    Data: {
        BagUsage: {
            Cpu: number;
            Mem: number;
        };
        Order: {
            OriginalAmount: number;
            DiscountAmount: number;
            RuleIds: string[];
            TradeAmount: number;
        };
        Rules: {
            RuleDescId: number;
            Name: string;
        }[];
        RequestPrice: {
            Order: {
                OriginalAmount: number;
                DiscountAmount: number;
                TradeAmount: number;
                RuleIds: string[];
            };
            Rules: {
                RuleDescId: number;
                Name: string;
            }[];
        };
        TrafficPrice: {
            Order: {
                OriginalAmount: number;
                DiscountAmount: number;
                TradeAmount: number;
                RuleIds: string[];
            };
            Rules: {
                RuleDescId: number;
                Name: string;
            }[];
        };
        CpuMemPrice: {
            Order: {
                OriginalAmount: number;
                DiscountAmount: number;
                TradeAmount: number;
                RuleIds: string[];
            };
            Rules: {
                RuleDescId: number;
                Name: string;
            }[];
        };
    };
    ErrorCode: string;
    Code: string;
    Success: boolean;
}
