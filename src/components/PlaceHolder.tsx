export default function PlaceHolder({ children }: { children: React.ReactNode }) {
    return (
      <div className="my-8 mx-auto opacity-50">
        <p className="text-center text-2xl font-semibold">{children}</p>
      </div>
    )
  }