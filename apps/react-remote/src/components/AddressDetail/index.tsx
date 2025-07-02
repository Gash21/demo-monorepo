const AddressDetails: React.FC = () => {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Address Details</h2>
      <div className="space-y-1">
        <p>Name: John Doe</p>
        <p>Street: 123 Main St</p>
        <p>City: Jakarta</p>
        <p>Postal Code: 12345</p>
      </div>
    </div>
  );
};

export default AddressDetails;
