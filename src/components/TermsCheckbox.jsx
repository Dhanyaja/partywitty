const TermsCheckbox = () => {
    return (
        <div className="flex items-center gap-2 mt-6">
            <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border border-[#7464E4] accent-[#7464E4] cursor-pointer"
            />

            <label
                htmlFor="terms"
                className="text-[12px] text-[#1D1D1D] leading-none"
            >
                I agree to the{" "}
                <span className="text-[#7464E4] cursor-pointer">
                    Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#7464E4] cursor-pointer">
                    Privacy Policy
                </span>
                .
            </label>
        </div>
    );
};

export default TermsCheckbox;