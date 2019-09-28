interface DYCDPAPI {
    QueryCdpOffer(query: {
        "RegionId"?: string;
        "ChannelType": string;
        "OwnerId"?: number;
        "Vendor"?: string;
        "Province"?: string;
    }): Promise<{}>;
    QueryCdpOfferById(query: {
        "RegionId"?: string;
        "OfferId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    QueryCdpOrder(query: {
        "RegionId"?: string;
        "OutOrderId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default DYCDPAPI;
