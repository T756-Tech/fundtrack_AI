import Debug "mo:base/Debug";

actor FundTrackAI {
    // 
    stable var fundReport : Text = "No data available";

    public func getFundReport() : async Text {
        return fundReport;
    };

    // Function to update the fund report (for demonstration)
    public func updateFundReport(newData : Text) : async () {
        fundReport := newData;
    };
};

